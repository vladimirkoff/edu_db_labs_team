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



## Реляційна схема

