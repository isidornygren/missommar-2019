import React from 'react';

export default class Filmer extends React.PureComponent {
	render() {
		return (
			<div className="banner-text">
				<h2>Grisfilmer</h2>
				<p>
					Nytt för i år är vad som i folkmun har börjat kallats för Filmvisning. För att upphålla en god
					stämning utan missunsamhet så kommer filmerna demokratiskt att väljas under en tidsperiod innan
					festivalen startar. Detta så att arrangörerna hinner censurera och handplocka bort stötande eller
					okristna filmer. Om du är sugen på att lämna in just din film för röstning så tveka inte att
					kontakta oss på grisfilmer@missömmar.com. Vem vet, kanske är det just DU som kommer vinna den stora
					grisstatyetten i år?
				</p>
			</div>
		);
	}
}
