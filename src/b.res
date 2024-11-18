module Spice = {
  type decodeError = {
    path: string,
    message: string,
    value: Js.Json.t,
  }

  type result<'a> = result<'a, decodeError>
  type decoder<'a> = Js.Json.t => result<'a>
  type encoder<'a> = 'a => Js.Json.t
  type codec<'a> = (encoder<'a>, decoder<'a>)

  let error = (~path=?, message, value) => {
    let path = switch path {
    | None => ""
    | Some(s) => s
    }
    Error({path, message, value})
  }

  let stringToJson = (s): Js.Json.t => Js.Json.String(s)

  let stringFromJson = j =>
    switch (j: Js.Json.t) {
    | Js.Json.String(s) => Ok(s)
    | _ => Error({path: "", message: "Not a string", value: j})
    }

  let intToJson = (i): Js.Json.t => Js.Json.Number(Float.fromInt(i))

  let optionToJson = (encoder, opt): option<Js.Json.t> =>
    switch opt {
    | Some(x) => Some(encoder(x))
    | None => None
    }

  let filterOptional = arr =>
    Belt.Array.keepMap(arr, ((k, v)) =>
      switch v {
      | Some(v) => Some(k, v)
      | None => None
      }
    )
}

@spice.encode
type tOp = {
  label: option<string>,
  value?: int,
}
