from django.http import HttpResponse 
from django.shortcuts import render
from biometrics_did.models import Soldier
import matplotlib.pyplot as plt
import numpy as np
import csv

def write_soldier(first_name, last_name, water, body_diff, heart_rate, moisture, bmi, prior):
    s = Soldier()
    s.first_name = first_name
    s.last_name = last_name
    s.water = water
    s.body_differential = body_diff
    s.heart_rate = heart_rate
    s.moisture = moisture
    s.bmi = bmi
    s.prior = prior
    return s
    
with open('static/data.csv', 'r') as f:
    reader = csv.reader(f)
    next(reader)
    rows = [x for x in reader] 
    first_names = [r[1] for r in rows]
    last_names = [r[2] for r in rows]
    water = [int(r[3]) for r in rows]
    body_diff = [int(r[4]) for r in rows]
    heart_rate = [int(r[5]) for r in rows]
    moisture = [int(r[6]) for r in rows]
    bmi = [int(r[7]) for r in rows]
    prior = [int(r[8]) for r in rows]



s1 = write_soldier(first_names[0], last_names[0], water[0], body_diff[0], heart_rate[0], moisture[0], bmi[0], prior[0]) 
s2 = write_soldier(first_names[1], last_names[1], water[1], body_diff[1], heart_rate[1], moisture[1], bmi[1], prior[1]) 
s3 = write_soldier(first_names[2], last_names[2], water[2], body_diff[2], heart_rate[2], moisture[2], bmi[2], prior[2]) 
s4 = write_soldier(first_names[3], last_names[3], water[3], body_diff[3], heart_rate[3], moisture[3], bmi[3], prior[3]) 



def team_lead(request): 
    context = {
      's1_first_name':s1.first_name,
      's1_last_name':s1.last_name,
      's1_score':s1.calculate_score(),
      's2_first_name':s2.first_name,
      's2_last_name':s2.last_name,
      's2_score':s2.calculate_score(),
      's3_first_name':s3.first_name,
      's3_last_name':s3.last_name,
      's3_score':s3.calculate_score(),
      's4_first_name':s4.first_name,
      's4_last_name':s4.last_name,
      's4_score':s4.calculate_score(),
      }
    return render(request, 'team_lead.html', context)

def medic(request):
    context = {
      's1_first_name':s1.first_name,
      's1_last_name':s1.last_name,
      's1_water':s1.water,
      's1_body_diff':s1.body_differential,
      's1_heart_rate':s1.heart_rate,
      's1_moisture':s1.moisture,
      's1_bmi':s1.bmi,
      's1_prior':s1.prior,
      's1_score':s1.calculate_score(),
      's2_first_name':s2.first_name,
      's2_last_name':s2.last_name,
      's2_water':s2.water,
      's2_body_diff':s2.body_differential,
      's2_heart_rate':s2.heart_rate,
      's2_moisture':s2.moisture,
      's2_bmi':s2.bmi,
      's2_prior':s2.prior,
      's2_score':s2.calculate_score(),
      's3_first_name':s3.first_name,
      's3_last_name':s3.last_name,
      's3_water':s3.water,
      's3_body_diff':s3.body_differential,
      's3_heart_rate':s3.heart_rate,
      's3_moisture':s3.moisture,
      's3_bmi':s3.bmi,
      's3_prior':s3.prior,
      's3_score':s3.calculate_score(),
      's4_first_name':s4.first_name,
      's4_last_name':s4.last_name,
      's4_water':s4.water,
      's4_body_diff':s4.body_differential,
      's4_heart_rate':s4.heart_rate,
      's4_moisture':s4.moisture,
      's4_bmi':s4.bmi,
      's4_prior':s4.prior,
      's4_score':s4.calculate_score(),
    }
    return render(request, 'medic.html', context)
