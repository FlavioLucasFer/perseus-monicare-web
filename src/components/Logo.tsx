import React from 'react';

const Logo = (props: any) => (
	<img 
		{...props}
		src={require('images/logo_monicare.png')}
	/>
);

export default Logo;
