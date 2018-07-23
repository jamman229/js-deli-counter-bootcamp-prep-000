var katzDeli = []

function takeANumber(katzDeli, name){
  katzDeli.push(name)
    return `Welcome, ${name}. You are number ${katzDeli.length} in line.`
}

function nowServing(){
  if (katzDeli => 0){
  return `Currently serving ${katzDeli[0]}`
    katzDeli.shift()
  } else {
    return ''
  }
}