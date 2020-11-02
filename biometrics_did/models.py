from django.db import models

class Soldier(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    water = models.IntegerField()
    body_differential = models.IntegerField()
    heart_rate = models.IntegerField()
    moisture = models.IntegerField()
    bmi = models.IntegerField()
    prior = models.IntegerField()

    #calculates overall score using weighted averages
    def calculate_score(self):
        avg = (.4)*self.body_differential + (.25)*self.heart_rate + (.25)*self.moisture + (.1)*self.bmi
        self.score = float(avg)
        #Put intrinsic variables score through multipliers
        if (self.water > 90):
            self.score = self.score * .5
        elif (self.water > 80):
            self.score = self.score * .8
        elif (self.water > 60):
            self.score = self.score * 1.2
        elif (self.water > 40):
            self.score = self.score * 1.6
        if (self.prior):
            self.score = self.score * 1.2
        return float(self.score)

