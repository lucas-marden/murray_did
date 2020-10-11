from django.http import HttpResponse

 
def team_lead(request):
    with open('biometrics_did/team_lead.html', 'r') as f:
        team_lead_html = ''.join(f.readlines())
    return HttpResponse(team_lead_html)

def medic(request):
    with open('biometrics_did/medic.html', 'r') as f:
        medic_html = ''.join(f.readlines())
    return HttpResponse(medic_html)
