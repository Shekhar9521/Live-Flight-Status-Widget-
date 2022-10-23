 const tableBody = document.getElementById('table-body')

 const getFlight = () => {
    fetch('http://localhost:8000/flights') Promise<Response>
         .then(response => response.json()) Promise<any>
         .then(flights => {
             console.log(flights)
     }) Promise<any>
     .catch(err => console.log(err))
 }
 getFlight()

 const populateTable = (flights) => {
    console.log(flights)
    for (const flight of flights){
    const tableRow = document.createElement('tr')
    const tableIcon = document.createElement('td')
    tableIcon.textContent = "+"
    tableRow.append(tableIcon)

    const flightsDetails = {
        time: flight.departing.slice(0,5),
        destination: flight.destination.toUpperCase,
        flight: flight.flightNumber.shift(),
        gate: flight.gate,
        remarks: flight.status.toUpperCase()
    }

    for (const flightDetail in flightsDetails) {
        const  tableCall = document.createElement('td')
        const word = Array.from(flightDetail[flightDetail])

        for (const [index, letter] of word.entries()) {
            const letterElement = document.createElement('div')


            setTimeout(() => {
                letterElement.classList.add('flip')
                letterElement.textContent = letter
                tableCall.append(letterElement)
            }, 100 * index)


        }
        tableRow.append(tableCall)
    }


    tableBody.append(tableRow)

    }

 }