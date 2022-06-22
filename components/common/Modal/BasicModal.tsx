import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { Alert, AlertTitle } from '@mui/material';
import { useRouter } from 'next/router';

interface iBasicModal {
	isModal: boolean;
	url: string;
	modalOnChange: React.Dispatch<React.SetStateAction<boolean>>;
	successText?: string;
	errorText?: string;
	closeText?: string;
	status?: number;
}

export default function BasicModal(props: iBasicModal) {
  const router = useRouter();

  const {
	isModal,
	url,
	modalOnChange,
	successText,
	errorText,
	closeText,
	status,
  } = props;

  const onExit = () => {
	modalOnChange(false);
	if (url) {
		router.push({
			pathname: url,
		});
	}
  }

  return (
    <div>
      <Modal
        open={isModal}
        onClose={() => modalOnChange(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
		{status == 200 &&
			<Alert severity="success">
				<AlertTitle>
					{'Success'}
				</AlertTitle>
				{successText ?? ''}
			</Alert>
		}
		{status != 200 &&
			<Alert severity="error">
			<AlertTitle>
				{'Error'}
			</AlertTitle>
				{errorText ?? ''}
		  	</Alert>
		}
		 	<Button 
		  		onClick={() => onExit()}
				fullWidth
				sx={{color: '#002f34', mt:'10px',  ':hover': {color: '#fff', backgroundColor: '#002f34'}}}
			>
				{closeText ?? 'Close'}
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