import matplotlib.pyplot as plt
    
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


intake1 = [0.52, .66]
intake2 = [0.94, .85]
intake3 = [1.3, .43]
intake4 = [.54, .87]

name1 = 'CDT Murray'
name2 = 'CDT Marden'
name3 = 'CDT Motes'
name4 = 'CDT Cogbill'

plt.plot(intake1)
plt.ylabel('Water Intake(Quarts/Hour)')
plt.xlabel('Hours')
plt.title('Change in ' + name1 + '\'s Water Intake')
plt.savefig('soldier1_water.jpg', bbox_inches='tight')

plt.plot(intake2)
plt.ylabel('Water Intake(Quarts/Hour)')
plt.xlabel('Hours')
plt.title('Change in ' + name2 + '\'s Water Intake')
plt.savefig('soldier2_water.jpg', bbox_inches='tight')

plt.plot(intake3)
plt.ylabel('Water Intake(Quarts/Hour)')
plt.xlabel('Hours')
plt.title('Change in ' + name3 + '\'s Water Intake')
plt.savefig('soldier3_water.jpg', bbox_inches='tight')

plt.plot(intake4)
plt.ylabel('Water Intake(Quarts/Hour)')
plt.xlabel('Hours')
plt.title('Change in ' + name4 + '\'s Water Intake')
plt.savefig('soldier4_water.jpg', bbox_inches='tight')
