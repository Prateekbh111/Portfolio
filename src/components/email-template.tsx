import * as React from "react";

interface EmailTemplateProps {
	firstname: string;
	lastname: string;
	email: string;
	message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
	firstname,
	lastname,
	email,
	message,
}) => (
	<div>
		<h1>
			{firstname}
			{lastname}
		</h1>
		<h1>{email}</h1>
		<p>{message}</p>
	</div>
);
