<p style="font-size:16px;font-weight:600">Dear, {{ $data['name'] }}</p>
<br>
<p style="font-size:14px;">You have a new appointment on Sapho project</p>
<br>
<p style="font-size:14px;">
    Clinic: 
    <span style="font-weight:600">{{ $data['clinic']['city'] }}, {{ $data['clinic']['address'] }}</span>
</p>
<p style="font-size:14px;">
    Start time: 
    <span style="font-weight:600">{{ $data['start_time'] }}</span>
</p>
<p style="font-size:14px;">
    End time: 
    <span style="font-weight:600">{{ $data['end_time'] }}</span>
</p>
<p style="font-size:14px;">
    Clinician: 
    <span style="font-weight:600">{{ $data['clinician']['name'] }}</span>
</p>
<p style="font-size:14px;">
    <b>Contact info</b><br> 
    Email: 
    <span style="font-weight:600">{{ $data['clinician']['email'] }}</span><br>
    Phone:
    <span style="font-weight:600">{{ $data['clinician']['phone'] }}</span><br>
</p>
<p style="font-size:14px;">
    Appointment details: 
    <span style="font-weight:400">{{ $data['details'] }}</span>
</p>
<br>
<p style="font-size:14px;">After your initial login, you will have full access to the appointment.</p>
<br>
<p style="font-size:14px;">Best regards,</p>
<p style="font-size:14px;fownt-weight:600;">Sapho team</p>