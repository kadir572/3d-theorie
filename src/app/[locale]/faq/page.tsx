import PageLayout from '@/components/layouts/PageLayout'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

const questions: { title: string; body: string }[] = [
  {
    title: 'Wann kommt die 3D-Theorie App?',
    body: 'Geplant anfangs 2025',
  },
  {
    title: 'Sind die Fragen die gleichen wie bei der kantonalen Prüfung',
    body: 'Ja, wir arbeiten mit der ASA zusammen.',
  },
  {
    title: 'Sind es die selben Fragen wie bei der kantonalen Prüfung',
    body: 'Ja, wir arbeiten mit der ASA zusammen.',
  },
]

export default function FAQPage() {
  return (
    <PageLayout title='FAQ'>
      <Box>
        {questions.map((q, i) => (
          <>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls='panel1-content'
                id='panel1-header'
              >
                <Typography variant='h6'>{q.title}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{q.body}</Typography>
              </AccordionDetails>
            </Accordion>
          </>
        ))}
      </Box>
    </PageLayout>
  )
}
