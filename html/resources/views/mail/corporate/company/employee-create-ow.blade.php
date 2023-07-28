<p style="font-size:16px;font-weight:600">Dear, {{ $data['name'] }}</p>
<br>
<p style="font-size:14px;">Congratulations! You've successfully created a new user within the Sapho project. Well done!</p>
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
<p style="font-size:14px;">Great news! An email containing the registration confirmation has been sent to your new employee as well. They will receive all the necessary information to get started smoothly.</p>
<br>
<p style="font-size:14px;">Best regards,</p>
<p style="font-size:14px;fownt-weight:600;">Sapho team</p>