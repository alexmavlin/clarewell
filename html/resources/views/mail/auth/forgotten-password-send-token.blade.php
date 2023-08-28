<h1>Dear, {{ $data['user']['name'] }}</h1>
<p>You've submitted a password restoration request for the Sapho project.</p>

<p>To restore your password, follow this link please:</p>
<a href="{{ $data['restore_link'] }}">{{ $data['restore_link'] }}</a>

<p>Best regards,</p>
<p>Sapho project</p>