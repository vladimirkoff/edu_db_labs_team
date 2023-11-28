# Проєктування бази даних
 
## Модель бізнес-об'єктів 

@startuml

entity User <<ENTITY>> #2BD7FF
entity User.name <<TEXT>> #B0F0FF 
entity User.login <<TEXT>> #B0F0FF
entity User.password <<TEXT>> #B0F0FF
entity User.email <<TEXT>> #B0F0FF
entity User.id <<NUMBER>> #B0F0FF

User.name --* User 
User.login --* User 
User.password --* User 
User.email --* User 
User.id --* User

entity Request <<ENTITY>> #2BD7FF
entity Request.id <<NUMBER>> #B0F0FF
entity Request.description <<TEXT>> #B0F0FF

Request.id -u-* Request
Request.description -u-* Request

entity Media <<ENTITY>> #2BD7FF
entity Media.id <<NUMBER>> #B0F0FF
entity Media.type <<TEXT>> #B0F0FF
entity Media.url <<TEXT>> #B0F0FF
entity Media.name <<TEXT>> #B0F0FF
entity Media.metadata <<TEXT>> #B0F0FF

Media.id --* Media
Media.type --* Media
Media.url --* Media
Media.name --* Media
Media.metadata --* Media

entity Origin <<ENTITY>> #2BD7FF
entity Origin.id <<NUMBER>> #B0F0FF
entity Origin.name <<TEXT>> #B0F0FF
entity Origin.location <<TEXT>> #B0F0FF
entity Origin.rating <<NUMBER>> #B0F0FF

Origin.id-u-* Origin
Origin.name-u-* Origin
Origin.location-u-* Origin
Origin.rating-u-* Origin

entity Role <<ENTITY>> #2BD7FF
entity Role.id <<NUMBER>> #B0F0FF
entity Role.name <<TEXT>> #B0F0FF
entity Role.grants <<TEXT>> #B0F0FF

Role.id-u-* Role
Role.name-u-* Role
Role.grants-u-* Role

entity Grant <<ENTITY>> #2BD7FF
entity Grant.id <<NUMBER>> #B0F0FF
entity Grant.title <<TEXT>> #B0F0FF
entity Grant.description <<TEXT>> #B0F0FF
 
Grant.id --* Grant
Grant.title --* Grant
Grant.description --* Grant 

User "0, *" -d- "1, 1" Role 
Role "0, 1" -l- "1, *" Grant 
User "1, 1" -r- "0, *" Request
Request "1, *" -r- "1, 1" Media
Media "0, *" -d- "1, 1" Origin

@enduml

## ER-модель


<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>
  
@startuml

!define ADMIN_COLOR #CB2D1A
!define USER_COLOR #27CB1A
!define OVERALL_COLOR #71AEF6

entity "Origin" as origin <<E, ADMIN_COLOR>> {
  +id: int
  --
  name: string
  location: string
  rating: int
}

entity "Media" as media <<E, OVERALL_COLOR>> {
  +id: int
  --
  type: string
  url: string
  name: string
  metadata: string
}

entity "Request" as request <<E, OVERALL_COLOR>> {
  +id: int
  --
  description: string
}

entity "User" as user <<E, USER_COLOR>> {
  +id: int
  --
  name: string
  login: string
  password: string
  email: string
}

entity "Role" as role <<E, ADMIN_COLOR>> {
  +id: int
  --
  name: string
  grants: string
}

entity "Grant" as grant <<E, ADMIN_COLOR>> {
  +id: int
  --
  title: string
  description: string
}

origin "1,1"--"0,*" media
media "1,1"--"1,*" request
request "0,*"--"1,1" user
user "0,*"--"1,1" role
role "0,1"--"1,*" grant

@enduml

</center>

## Реляційна схема

![image](https://github.com/vladimirkoff/edu_db_labs_team/assets/113525627/8aabb786-d3b5-47b5-935a-a124fb703ee1)
