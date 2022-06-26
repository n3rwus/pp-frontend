import { NextPage } from "next";
import Head from "next/head"
import { useRouter } from "next/router";
import { useEffect } from "react";
import Loader from "../components/common/Loader/Loader";


const Loading: NextPage = () => {

	const router = useRouter();
	const advertId = router.query.advertId;

	const redirectAhead = () => {
		router.push({ pathname:'/advert', query:{advertId} });
	}

	useEffect(() => {
		redirectAhead();
	});

	return (
		<div>
			<Head>
				<title>{'Ogłoszenia - Sprzedam, kupię na ZMITAC.pl'}</title>
				<link rel='icon' href='./favicon.ico' />
			</Head>
			<Loader/>
		</div>
	)
}

export default Loading;


