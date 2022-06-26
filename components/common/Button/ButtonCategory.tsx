import { Button, Grid, Paper } from "@mui/material";
import Link from "next/link";


interface ButtonCategoryProps {
    icon: React.ReactElement;
    iconBackgroundColor: string;
    text: string;
    categoryId: string;
}

export default function ButtonCategory(props: ButtonCategoryProps) {
    const {
        categoryId,
    } = props;

	return (
        <Link href={{pathname:'/category/', query:{categoryId}}}>
		<Button>   
            <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }} justifyContent='center'>
                <Grid item>
                    <Paper sx={{backgroundColor: props.iconBackgroundColor, borderRadius: '60px', width:'60px', height: '60px'}}>
                        {props.icon}
                    </Paper>
                </Grid>
                <Grid item xs={12} sx={{mt: '10px', color: '#002f34'}}>
                    {props.text}
                </Grid>
            </Grid>
		</Button>
        </Link>
	);
}