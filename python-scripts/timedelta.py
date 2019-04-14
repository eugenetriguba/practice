# Playing around with timedelta

from datetime import datetime
from datetime import timedelta

time = timedelta(days=4, hours=10)

print(time.days)               # 4 hours
print(time.seconds)            # 36000 seconds
print(time.seconds / 60 / 60)  # 10 hours, no time.hours

eta = timedelta(hours=6)
today = datetime.today()

print(today)
print(eta)
print(today + eta)
