import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { Alert } from '@mui/material';
import { useRouter } from 'next/router';

interface iAddModal {
	isModal: boolean;
	url: string;
	modalOnChange: React.Dispatch<React.SetStateAction<boolean>>;
	onAddClick: () => Promise<number>;
	warningText?: string;
	addText?: string;
	queryText?: string;
	queryValue?: string;
}

export default function AddModal(props: iAddModal) {
	const router = useRouter();
	const [status, setStatus] = React.useState(0);

	const {
		isModal,
		url,
		modalOnChange,
		addText,
		warningText,
		onAddClick,
		queryText,
		queryValue,
	} = props;

	const onAdd = () => {
		return onAddClick()
		.then((status) =>{
			setStatus(status);
			if (status === 200 && url) {
				window.location.reload();
				router.push({
					pathname: url,
					query: queryText && queryValue ? {advertId: queryValue} : {}
				});
			}
			return;
		})
	}

	const onClose = () => {
		modalOnChange(false);
		setStatus(0);
	}

	return (
	<div>
		<Modal
		open={isModal}
		onClose={onClose}
		aria-labelledby="modal-modal-title"
		aria-describedby="modal-modal-description"
		>
		<Box sx={style}>
			{status !== 200 && status !== 0 &&
				<Alert severity="error">
					{'An error occured'}
				</Alert>
			}
			{status === 0 &&
			    <div>
					<Alert severity="warning">
						{warningText}
					</Alert>
					<Button 
						onClick={onAdd}
						fullWidth
						sx={{color: '#002f34', mt:'10px', border:'1px solid #002f34', ':hover': {color: '#fff', backgroundColor: '#002f34'}}}
					>
						{addText}
					</Button>
				</div>
			}
			<Button 
				onClick={() => onClose()}
				fullWidth
				sx={{color: '#002f34', mt:'10px', border:'1px solid #002f34', ':hover': {color: '#fff', backgroundColor: '#002f34'}}}
			>
				{'Wróć'}
			</Button>
		</Box>
		</Modal>
	</div>
	);
}

const style = {
	position: 'absolute' as 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
};