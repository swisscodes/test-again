export default function dataDisplay(data) {
	let dataKeys = Object.keys(data)
    let el = `
        <div class='diplay-main'>
				${dataKeys.map((key) => {
						let item = data[key]
						return `
							<div class='cards-container'>
								<div class='display-cards'>
									<div class='display-image'>
										<p class='display-image_p'>${item.fname[0].toUpperCase() + item.lname[0].toUpperCase()}</p>
									</div>

									<p>${item.fname}</p>
									<p>${item.lname}</p>
									</div>
								<div>hello</div>
						</div>`}).join('')
						
					}
        <div/>
			`
		document.getElementById("display").innerHTML = el
} 