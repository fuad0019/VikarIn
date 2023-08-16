import { Grid, Typography } from "@mui/material"
import PositionCard from "./PositionsCards"
import FadeIn from "./FadeIn"

export interface Job {

    type: string,
    title: string,
    description: string

}

interface JobSectionProps {
    jobs: Job[],
}

function JobSection({ jobs }: JobSectionProps) {

    return (

        <div style={{alignContent: 'center', display: 'flex', flexDirection: 'column', textAlign: 'center'}}>
            <Typography variant="h3" margin={'5%'}>Vi søger:</Typography>
            <Grid container gap={5} justifyContent={'center'} textAlign={'left'}>

            {jobs.map((job,i) =>
                <FadeIn direction="bottom" delay={`${200*i+1}ms`}>
                    <Grid item sm={4}>
                        <PositionCard job={job}></PositionCard>
                    </Grid>
                </FadeIn>

            )}


        </Grid>
        </div>
        

    )
}

export default JobSection

