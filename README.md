# Movies app
## Json server
### Command
    Run server
    $ json-server --watch movies.json
### Routes:
- Movies:
    - GET(list): `/movies?_page=*number*&_limit=*number*`
- Movie detail:
    - GET(get details): `/movies/:movieId`
- Contact us:
    - POST(send message): `/messages`

## Frontend
### Commands
    Run dev server
    $ npm run dev

    Build app
    $ npm run build

### Pages
- Homepage: `/home` Homepage with projects we have done so far.
- Movies: `/movies` List of movies with pagination and size of single page.
- Movie detail: `/movies/movieId` Movie detail page.
- Contact me: `/contact-me` Contact me page, with message sending form.
- Not Found: `/*` Page for nonexistent routes, including nonexistent movie detail pages.