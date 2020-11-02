class Soldier:
    def __init__(self, water, body_differential, heart_rate, moisture, bmi, prior, name):
        self.water = water
        self.body_differential = body_differential
        self.heart_rate = heart_rate
        self.moisture = moisture
        self.bmi = bmi
        self.prior = prior
        self.name = name
        
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
        #prior heat injury
        if (self.prior):
            self.score = self.score * 1.2
            
        return float(self.score)
        
        
