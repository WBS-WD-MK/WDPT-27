SELECT * FROM crime_scene_report WHERE date=20180115 AND city='SQL City' AND type='murder';

/*
Security footage shows that there were 2 witnesses. The first witness lives at the last house on "Northwestern Dr". The second witness, named Annabel, lives somewhere on "Franklin Ave".
*/

SELECT * FROM person WHERE address_street_name='Northwestern Dr' ORDER BY  address_number DESC limit 1 ;

/*
14887	Morty Schapiro	118009	4919	Northwestern Dr	111564949
*/
SELECT * FROM person WHERE name Like 'Annabel%' AND address_street_name='Franklin Ave' 

/*
16371	Annabel Miller	490173	103	Franklin Ave	318771143
*/
SELECT * FROM interview WHERE person_id='14887' OR person_id='16371';
/*
14887	I heard a gunshot and then saw a man run out. He had a "Get Fit Now Gym" bag. The membership number on the bag started with "48Z". Only gold members have those bags. The man got into a car with a plate that included "H42W".

16371	I saw the murder happen, and I recognized the killer from my gym when I was working out last week on January the 9th.
*/
SELECT * from get_fit_now_member WHERE membership_status='gold' and id LIKE '48Z%'
/*
48Z7A	28819	Joe Germuska	20160305	gold
48Z55	67318	Jeremy Bowers	20160101	gold
*/
SELECT person.name,person.id from drivers_license JOIN person on person.license_id = drivers_license.id where plate_number like '%H42W%'
/*
Tushar Chandra	51739
Jeremy Bowers	67318
Maxine Whitely	78193
*/

SELECT * FROM get_fit_now_check_in WHERE (membership_id='48Z7A' OR membership_id='48Z55') and check_in_date='20180109';

/*
48Z7A	20180109	1600	1730
48Z55	20180109	1530	1700
*/
SELECT person.name,person.id,facebook_event_checkin.* from person
JOIN drivers_license on person.license_id=drivers_license.id
JOIN facebook_event_checkin on facebook_event_checkin.person_id=person.id
WHERE gender='female' AND hair_color='red' 
AND height between 65 AND 67 
AND car_make='Tesla' and car_model='Model S' 
AND facebook_event_checkin.event_name= 'SQL Symphony Concert'
/*
Miranda Priestly	
*/