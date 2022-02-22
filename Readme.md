How to design mongodb schema:
https://www.youtube.com/watch?v=leNCfU5SYR8
Refer to 33:00 for why we use two-way reference for many-to-many relationship

On successful login, a token and the user's ID will be returned to the FE:
{
"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjE0Mzg2NmNiOTJiNjZhYTAxZTUzZTMiLCJuYW1lIjoiRm9vbmciLCJhZGRyZXNzIjoiMTIzNDU2Nzg5MSIsImlhdCI6MTY0NTQ5MjY0MywiZXhwIjoxNjQ1NTE0MjQzfQ.dWphowwzf8SYmgM2gEDanPg0Cn824StAAVslFNfdY4I",
"userId": "62143866cb92b66aa01e53e3"
}
