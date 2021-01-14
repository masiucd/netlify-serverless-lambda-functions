interface Observer {
  next: <T>(x: T) => void
  error: <E>(x: E) => void
  complete: () => void
}

const observable = {
  subscribe: (observer: Observer) => {
    const url = "https://jsonplaceholder.typicode.com/users/1"
    const result = fetch(url).then(r => r.json())

    result.then(observer.next, observer.error)
  },
}

const observer: Observer = {
  next: <T>(x: T) => {
    console.log(x)
  },
  error: <E>(err: E) => {
    console.log(err)
  },
  complete: () => {
    console.log("done")
  },
}
// RUN FROM THE ROOT : ➜ deno run --allow-net src/01.ts
// observable.subscribe(observer)
