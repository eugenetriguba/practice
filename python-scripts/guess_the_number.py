# An app that generates a random number
# and has the user try to guess it, telling
# the user if their guess was too high or low

import random


def print_header():
    """Outputs 'GUESS THE NUMBER APP' for the app header"""

    print('------------------------------')
    print('      GUESS THE NUMBER APP    ')
    print('------------------------------')
    print()


def guess_the_number():
    """Generates a random number and has the user try to guess it"""

    random_number = random.randint(0, 100)

    while True:
        guess = int(input('Guess a number between 0 and 100: '))

        if guess > random_number:
            print('Sorry but {} is HIGHER than the number'.format(guess))
        elif guess < random_number:
            print('Sorry but {} is LOWER than the number'.format(guess))
        else:
            print('You got it. The number was {}'.format(guess))
            break


if __name__ == '__main__':
    print_header()
    guess_the_number()
