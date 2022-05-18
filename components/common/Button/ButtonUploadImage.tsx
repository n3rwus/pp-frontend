import { Button } from '@mui/material';
import React, { Dispatch, SetStateAction } from 'react';
import { styled } from '@mui/material/styles';

interface iUploadImageButton {
	multiple: boolean;
	handleImages: Dispatch<SetStateAction<FileList | undefined>>;
}

const Input = styled('input')({
	display: 'none',
});

const ButtonUploadImage = (props: iUploadImageButton) => {
	const { multiple, handleImages } = props;

	return (
		<React.Fragment>
			<label htmlFor="contained-button-file" style={{ width: '250px', height: '56px'}}>
				<Input
					accept="image/*"
					id="contained-button-file"
					multiple={multiple}
					type="file"
					onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
						handleImages(event.target.files ?? undefined);
					}}
					onClick={event => {
						handleImages(undefined);
					}}
					
				/>
				<Button variant="contained" component="span" fullWidth sx={{ height: '56px', backgroundColor: '#002f34', ":hover": {backgroundColor: '#7f9799'}}}>
					{'Dodaj zdjęcia'}
				</Button>
			</label>
		</React.Fragment>
	);
};

export default ButtonUploadImage;