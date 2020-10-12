from django.http import HttpResponse 
from django.shortcuts import render
from soldier_class import Soldier
import matplotlib.pyplot as plt
import numpy as np

def water_score(index, actual):
    if (index < 85):
        baseline = .5
    elif (index < 90):
        baseline = .75
    else:
        baseline = 1
    if (actual > baseline):
        actual = 1
    return float(100 * (actual/baseline))
    


intake1 = .83
intake2 = .3
intake3 = 1.0
intake4 = .9

body_diff1 = 75
body_diff2 = 15
body_diff3 = 62
body_diff4 = 70

heart_rate1 = 20
heart_rate2 = 33
heart_rate3 = 45
heart_rate4 = 2

moisture1 = 20
moisture2 = 86
moisture3 = 35
moisture4 = 10

bmi1 = 90
bmi2 = 75
bmi3 = 37
bmi4 = 50

prior1 = False
prior2 = False
prior3 = False
prior4 = False

name1 = 'CDT Murray'
name2 = 'CDT Marden'
name3 = 'CDT Motes'
name4 = 'CDT Cogbill'

water1 = water_score(87, intake1)
water2 = water_score(87, intake2)
water3 = water_score(87, intake3)
water4 = water_score(87, intake4)

soldier1 = Soldier(water1, body_diff1, heart_rate1, moisture1, bmi1, prior1, name1) 
soldier2 = Soldier(water2, body_diff2, heart_rate2, moisture2, bmi2, prior2, name2) 
soldier3 = Soldier(water3, body_diff3, heart_rate3, moisture3, bmi3, prior3, name3) 
soldier4 = Soldier(water4, body_diff4, heart_rate4, moisture4, bmi4, prior4, name4)



def team_lead(request): 
    context = {
      'soldier1_name':soldier1.name,
      'soldier1_score':soldier1.calculate_score(),
      'soldier2_name':soldier2.name,
      'soldier2_score':soldier2.calculate_score(),
      'soldier3_name':soldier3.name,
      'soldier3_score':soldier3.calculate_score(),
      'soldier4_name':soldier4.name,
      'soldier4_score':soldier4.calculate_score(),
      }
    return render(request, 'team_lead.html', context)

def medic(request):
    return render(request, 'medic.html')
