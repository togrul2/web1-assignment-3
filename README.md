# Movies app

## Json server
### Run command
`json-server --watch movies.json`
### Routes
List movies:
`/movies?_page=*number*&_limit=*number*`

Retrieve single movie:
`/movies/:movieId`