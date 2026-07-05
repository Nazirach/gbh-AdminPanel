# ERBETE DELETE USER UNIFIED AUDIT

Generated: 06/28/2026 05:10:52

## Tujuan

Audit ini mengunci jalur delete user agar tidak ada cabang liar antara Firebase Auth, Firestore, Laravel API, MySQL, dan Cloud Function.

## CUSTOMER_APP

- Path: C:\Users\Hp\Documents\Codex\2026-06-12\files-mentioned-by-the-user-documentation\work\emart-apps-extract\emart-6.7\customer

## MySQL Local Check

### users table

Field	Type	Null	Key	Default	Extra
id	bigint(20) unsigned	NO	PRI	NULL	auto_increment
name	varchar(255)	NO		NULL	
email	varchar(255)	NO		NULL	
email_verified_at	timestamp	YES		NULL	
password	varchar(255)	NO		NULL	
remember_token	varchar(100)	YES		NULL	
created_at	timestamp	YES		NULL	
updated_at	timestamp	YES		NULL	
role_id	bigint(20) unsigned	YES		NULL	

### vendor_users table

Field	Type	Null	Key	Default	Extra
id	int(255)	NO	PRI	NULL	auto_increment
user_id	varchar(255)	NO		NULL	
uuid	varchar(255)	NO		NULL	
email	varchar(255)	NO		NULL	

## Keputusan Kendali Sementara

- Belum patch.
- Jangan hapus user asli.
- Jangan jalankan Cloud Function deleteUser.
- Jangan git add/commit/push.
- Setelah audit ini, buat satu keputusan jalur resmi delete user: Firebase-first, Laravel-first, atau hybrid terkendali.