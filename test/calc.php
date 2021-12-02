<?php

$date = date_create('2021-12-01');

$lenght = 1;

$type = false;

$summ = 10000;

$stav = 0.1;

$popolnenie = 5000;

$daysYears= 365;



for($i=0; $i<$lenght; $i++)
{
    $date->modify('+1 month')->format('Y-m-d');
    if($date->format("Y")%4==0)
{
    $daysYears= 366;
}
else
{
    $daysYears= 365;
}
    $number = cal_days_in_month(CAL_GREGORIAN, date_format($date, "m"), date_format($date, "y"));
    $summ += $popolnenie + $summ * $number * ($stav / $daysYears);
}

echo $summ;
echo $popolnenie;
echo $number;
?>