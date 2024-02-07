import "./feature.css";

export default function Feature({ title, text }) {
	return (
		<div className="gpt3__features-container">
			<div className="gpt3__features-container__feature-title">
				<div />
				<h2>{title}</h2>
			</div>
			<div className="gpt3__features-container_feature-text">{text}</div>
		</div>
	);
}
