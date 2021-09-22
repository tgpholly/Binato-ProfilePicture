# Binato-ProfilePicture
The profile picture server for my osu!bancho server
<hr>

A simple HTTP server to fire profile pictures back for my bancho server

The picture to send if a user has no profile picture is DefaultProfilePicture.png in the ProfilePictures folder
For user's profile pictures do <user_id>.png

To send profile pictures to the client from this server you place the server at a.ppy.sh

## Things that need to be implemented:
 - Ability to upload profile pictures
    - Authenticated? (yes deffinitely, use the web-session)
 - Ability to auto resize and ~~***SHRONK***~~ compress profile pictures
