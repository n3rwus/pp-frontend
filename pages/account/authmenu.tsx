import type { NextPage } from 'next'
import * as React from 'react';
import Navbar from '../../components/common/Navbar/Navbar';
import LoginAndRegistration from '../../components/advanced/LoginAndRegistration';

const Authmenu: NextPage = () => {
	return (
		<div>
			<style jsx global>{`
				body {
					background-image: ${"url('./../backgroundExample.jpg')"};
				}
				`}
			</style>
			<Navbar/>
			<LoginAndRegistration/>
		</div>
	)
}

export default Authmenu