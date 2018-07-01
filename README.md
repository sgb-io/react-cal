# The Deal Test

```
     June 2018        
Su Mo Tu We Th Fr Sa  
                1  2  
 3  4  5  6  7  8  9  
10 11 12 13 14 15 16  
17 18 19 20 21 22 23  
24 25 26 27 28 29 30  
```

```
<Calendar /> -> props: month data (object or individual items?)
 heading
 <CalendarDays /> -> props: dates (eg null x5, 1, 2 or 3,4,5,6,7,8,9)
 <CalendarRow> x n
  <Day /> x n
 </CalendarRow>
</Calendar>
```

- Determine
  - Current month
  - Number of days in that month
  - Rows = number of days in that month / 7
    - But then you need to factor in when the month starts/ends
