import os
import matplotlib.pyplot as plt
import numpy as np

def draw(risk_score, n):
    fig, ax = plt.subplots()
    ax.vlines(1,0,100)
    ax.set_ylim(0,100)
    ax.set_xlim(0.9,1.1)
    a = [risk_score]
    y = np.ones(np.shape(a))   # Make all x values the same
    ax.plot(y,a,'<',ms = 20)  # Plot a line at each location specified in a
    ax.axis("off")
    fig.savefig('soldier{}_risk_score.jpg'.format(n))
    a = []



draw(24.5,1)
draw(43.25,2)
draw(24.25,3)
draw(18.0,4)
