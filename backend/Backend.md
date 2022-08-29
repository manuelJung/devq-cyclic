# Backend

-   Routes (wird von Express aufgerufen, und ruft (Auth), Validator und Controller auf)
-   Controller (nutzt das Model um mit der Datenbank zu kommunizieren)
-   Models (Abstraktion des ODM mongoose für den Zugriff auf die Datenbank)

-   Validators (wird von der Route aufgerufen um die eingehenden Daten zu prüfen)
-   Auth middleware (wird von der Route aufgerufen falls nur angemeldete Benutzer Zugriff haben dürfen)

MVC (Model view controller) - Was ist im Backend der View? Darstellung passiert im Frontend (oder um Thunderclient), der die Daten
über Routen abrufen kann. (Frontend: url: "http://localhost/**user/register**", Backend: Hier wird Route /user/register dadurch aufgerufen).

App, Security...

## Typischer durch das Frontend

0. (Frontend) Macht ein fetch auf eine Route im Backend (POST /user/register)
1. Express - Express ordnet die richtige Route zu
2. /user-Route - Alle dort registrierten Middlwares/Handler für /register aufrufen (validator, controller)
3. User validator - Prüfen der Eingaben, im Fehlerfall geben wir einen Fehler und Status 400 zurück
4. User controller - Passwort verschlüsseln, Token erzeugen, User in DB speichern und Cookie setzen sowie User zurückgeben
5. Falls im Controller ein Fehler passiert, wird dieser von der Error middleware gefangen und Status 500 wird zurück gegeben
