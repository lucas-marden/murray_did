from Soldier import Soldier

"""
Main method for website
"""

#units are in QT/HR
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
    
intake1 = 0.79
intake2 = 0.93
intake3 = 0.23
intake4 = 1.1

body_diff1 = 90
body_diff2 = 90
body_diff3 = 90
body_diff4 = 90

heart_rate1 = 90
heart_rate2 = 90
heart_rate3 = 90
heart_rate4 = 90

moisture1 = 90
moisture2 = 90
moisture3 = 90
moisture4 = 90

bmi1 = 90
bmi2 = 90
bmi3 = 90
bmi4 = 90

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
