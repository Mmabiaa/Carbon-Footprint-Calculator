document.getElementById('footprint-form').addEventListener('submit', function(e)
{
    e.preventDefault();
    let electricity = document.getElementById('electricity').value;
    let gas = document.getElementById('gas').value;
    let car = document.getElementById('car').value;
    let flights = document.getElementById('flights').value;

    let footprint = (electricity*0.85) + (gas*2.3) + (car*0.12) + (flights*(90));

    document.getElementById('result').innerHTML = 'Your footprint is ' + (footprint.toFixed(2)) + 'kg of CO2 per year';
});