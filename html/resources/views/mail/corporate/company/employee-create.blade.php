<p style="font-size:16px;font-weight:600">Dear, {{ $data['name'] }}</p>
<br>
<p style="font-size:14px;">Congratulations! You have been personally invited by your employer to join the esteemed Sapho project. You are granted access to your profile using the provided credentials.</p>
<br>
<p style="font-size:14px;">
    Login: 
    <span style="font-weight:600">{{ $data['email'] }}</span>
</p>
<p style="font-size:14px;">
    Password: 
    <span style="font-weight:600">{{ $data['password'] }}</span>
</p>
<br>
<p style="font-size:14px;">After your initial login, you will have the ability to change your password at your convenience.</p>
<br>
<p style="font-size:14px;">Best regards,</p>
<p style="font-size:14px;fownt-weight:600;">Sapho team</p>