# Playing around with datetime

from datetime import datetime
from datetime import date

today = datetime.today()        # datetime.datetime
today_date = date.today()       # datetime.date
christmas = date(2019, 12, 25)  # datetime.date

days_until_christmas = (christmas - today_date).days

if christmas is not today_date:
    print("Sorry, today is not Christmas. There are still {} days to go!".format(days_until_christmas))
else:
    print("Today is Christmas!")
