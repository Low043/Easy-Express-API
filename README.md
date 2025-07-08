# Easy-API

.env:
```bash
DATABASE_URL = "postgresql://{username}:{dbpassword}@{host}:{port}/{dbname}"
```

src/server:
```bash
openssl req -x509 -newkey rsa:2048 -keyout private.key -out certificate.crt -days 365 -nodes
```