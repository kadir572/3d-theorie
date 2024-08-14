import PageLayout from '@/components/layouts/PageLayout'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import Box from '@mui/material/Box'

export default function PrivacyPolicyPage() {
  return (
    <PageLayout title='Datenschutz'>
      <Box sx={{ px: { xs: 2, md: 4 }, py: { xs: 2, md: 4 } }}>
        <Typography variant='h4' component='h2' gutterBottom>
          Wir haben ein paar einfache Prinzipien
        </Typography>
        <Typography component='ol' sx={{ pl: 4 }}>
          <li>
            Wir erheben Ihre personenbezogenen Daten nur,{' '}
            <strong>wenn wir diese benötigen</strong> und nur das,{' '}
            <strong>was wir brauchen</strong>, um Ihnen unsere Dienste
            anzubieten.
          </li>
          <li>
            Wir <strong>geben</strong> Ihre personenbezogenen Daten nicht an
            Dritte weiter, ausschließlich zur Bereitstellung und Entwicklung
            unserer Dienste, zur Einhaltung des Gesetzes oder um unsere Rechte,
            Eigentum oder Sicherheit, unsere Benutzer oder die Öffentlichkeit zu
            schützen.
          </li>
          <li>
            Wir <strong>speichern</strong> Ihre personenbezogenen Daten nicht,
            es sei denn, dies ist für den laufenden Betrieb unserer
            Dienstleistungen erforderlich.
          </li>
          <li>
            Wir geben Ihnen <strong>Kontrolle</strong> darüber, wie Ihre
            personenbezogenen Daten verarbeitet werden, einschließlich dem, was
            für die Öffentlichkeit sichtbar ist, was von Suchmaschinen erfasst
            werden kann, was privat gehalten und was gelöscht wird.
          </li>
        </Typography>

        <Typography variant='h5' component='h3' gutterBottom>
          Welche Daten erheben wir?
        </Typography>

        <Typography variant='h6' component='h4' gutterBottom>
          Daten, die Sie uns zur Verfügung stellen
        </Typography>
        <Typography paragraph>
          Wenn Sie unsere Dienste nutzen, fordern wir ggf. Informationen von
          Ihnen ein, z.B. eine E-Mail-Adresse, die wir mit Ihrem Konto
          verbinden, falls Sie an einem Wettbewerb teilnehmen oder, um auf Ihre
          Supportanfragen antworten zu können. Sie sind nicht verpflichtet uns
          diese Informationen zukommen zu lassen, doch könnte dies die
          vollständige Nutzung unserer Dienste verhindern.
        </Typography>

        <Typography variant='h6' component='h4' gutterBottom>
          Daten, die wir durch Ihre Nutzung unserer Dienste erhalten
        </Typography>
        <Typography paragraph>
          Wir erheben Daten über die von Ihnen verwendeten Dienste, sowie
          darüber wann und wie Sie diese verwenden. Diese Daten umfassen
          Geräteinformationen (z. B. Modell, Betriebssystem, Geräte-IDs wie IDFA
          und UDID), Log-Informationen (z. B. wann und wie Sie unsere Dienste in
          Anspruch genommen haben, mit welchem Gerät, bevorzugte Sprache usw.)
          und Analysedaten (z. B. Cookies, Beacons, Tags und Skripte).
        </Typography>

        <Typography variant='h6' component='h4' gutterBottom>
          Verwendung von Cookies
        </Typography>
        <Typography paragraph>
          Unsere Webseiten verwenden Cookies, um die Benutzererfahrung zu
          verbessern und bestimmte Funktionen zu ermöglichen. Cookies sind
          kleine Textdateien, die auf Ihrem Endgerät gespeichert werden. Sie
          dienen dazu, die Nutzung unserer Webseiten zu analysieren, Präferenzen
          zu speichern und personalisierte Inhalte bereitzustellen. Wir
          unterscheiden zwischen notwendigen Cookies, die für den Betrieb der
          Webseite unerlässlich sind, und optionalen Cookies, die uns helfen,
          unsere Dienstleistungen zu verbessern. Durch die Nutzung unserer
          Webseiten stimmen Sie der Verwendung von Cookies zu. Sie können Ihre
          Cookie-Einstellungen jederzeit in Ihrem Browser ändern und bereits
          gespeicherte Cookies löschen. Bitte beachten Sie, dass das
          Deaktivieren von Cookies die Funktionalität unserer Webseiten
          beeinträchtigen kann. Weitere Informationen zur Verwendung von Cookies
          und wie Sie Ihre Einstellungen anpassen können, finden Sie auf der
          Support-Website Ihres Browsers.
        </Typography>

        <Typography variant='h5' component='h3' gutterBottom>
          Wozu verwenden wir diese Daten?
        </Typography>

        <Typography variant='h6' component='h4' gutterBottom>
          Um unsere Dienste zu betreiben und zu verbessern
        </Typography>
        <Typography paragraph>
          Indem wir die bereitgestellten Daten verwenden, sind wir in der Lage,
          unsere Dienste anzubieten, Inhalte zu personalisieren und Vorschläge
          an Sie zu unterbreiten. Wir verwenden die erhobenen Daten, um
          nachzuvollziehen, wie Sie unsere Dienste nutzen und mit ihnen
          interagieren, um Ihre Benutzererfahrung und die allgemeine Qualität
          unserer Dienste zu verbessern.
        </Typography>

        <Typography variant='h6' component='h4' gutterBottom>
          Um Sie zu kontaktieren
        </Typography>
        <Typography paragraph>
          Wenn Sie sich mit uns in Verbindung setzen, halten wir die
          Korrespondenz fest, um Probleme, die Sie und andere Nutzer ggf. haben,
          zuzuordnen und zu lösen. Wenn Sie Angaben über Ihre E-Mail-Adresse
          gemacht haben, senden wir Ihnen gelegentlich E-Mails, in denen wir Sie
          über Sonderangebote und neue Funktionen informieren, Sie um ein
          Feedback bitten oder Sie einfach über Neuigkeiten von uns und unseren
          Produkten in Kenntnis setzen. Sie können unsere E-Mails jederzeit
          abbestellen, indem Sie sich mit einem Klick, über einen Link in einer
          beliebigen von uns gesendeten E-Mail abmelden oder uns per E-Mail
          kontaktieren (siehe unten).
        </Typography>

        <Typography variant='h6' component='h4' gutterBottom>
          Um relevante Anzeigen in unseren kostenlosen Apps bereitzustellen
        </Typography>
        <Typography paragraph>
          Wir und unsere Werbepartner schalten ggf. Werbung, wenn Sie unsere
          Dienste nutzen. Wir stellen den Inserenten keine personenbezogenen
          Daten zur Verfügung. Um Anzeigen zu schalten, die Sie interessieren,
          verwenden wir und unsere Werbepartner ggf. die über Sie und Ihre
          Nutzung unserer und anderer Dienste erhobenen Daten.
        </Typography>

        <Typography variant='h5' component='h3' gutterBottom>
          Wie kann ich die Daten über mich verwalten?
        </Typography>
        <Typography paragraph>
          Um die Löschung Ihrer Daten zu beantragen, kontaktieren Sie uns bitte
          unter <Link href='mailto:info@blyze.ch'>info@bylze.ch</Link>.
        </Typography>

        <Typography variant='h5' component='h3' gutterBottom>
          Datenhaltung
        </Typography>
        <Typography paragraph>
          Wir speichern Ihre personenbezogenen Daten nur so lange wie nötig,
          oder um legitime, geschäftliche oder rechtliche Zwecke zu verfolgen.
          Wir speichern und verwenden ggf. auch nicht-personenbezogene Daten,
          einschließlich Informationen, die sich angehäuft haben oder
          anonymisiert wurden. Wir entwerfen unsere Systeme so, dass Daten vor
          versehentlicher oder böswilliger Vernichtung geschützt sind. Daher
          löschen wir Restkopien ggf. nicht sofort von unseren aktiven Servern
          und entfernen einige Daten ggf. nicht von unserem Backup-System,
          sollten Sie Ihr Konto oder Informationen aus unseren Diensten löschen
          oder aktualisieren.
        </Typography>

        <Typography variant='h5' component='h3' gutterBottom>
          Wie teilen wir diese Daten?
        </Typography>
        <Typography paragraph>
          Wir geben Ihre personenbezogenen Daten nur weiter, wenn eine der
          folgenden Bedingungen erfüllt ist:
        </Typography>

        <Typography variant='h6' component='h4' gutterBottom>
          Mit Ihrer Zustimmung
        </Typography>
        <Typography paragraph>
          Wir geben nur mit Ihrem Einverständnis personenbezogene Daten an
          Unternehmen, Organisationen oder Einzelpersonen außerhalb unseres
          Unternehmens weiter.
        </Typography>

        <Typography variant='h6' component='h4' gutterBottom>
          Für externe Verarbeitung
        </Typography>
        <Typography paragraph>
          Wir stellen unseren Partnern, vertrauenswürdigen Organisationen,
          Anbietern und anderen verbundenen Organisationen personenbezogene
          sowie nicht-personenbezogene Daten zur Verfügung, um sie in unserem
          Auftrag, gemäß unseren Anweisungen, Datenschutzrichtlinien und anderen
          angemessenen Vertraulichkeits-, Sicherheits- oder sonstigen
          Anforderungen, die wir für notwendig erachten, zu verarbeiten. Einige
          dieser Auftragnehmer und verbundenen Organisationen befinden sich
          evtl. außerhalb Ihres Heimatlandes und mit der Nutzung unserer
          Dienste, geben Sie Ihr Einverständnis zur Übermittlung Ihrer Daten an
          diese. Von Zeit zu Zeit veröffentlichen wir ggf. nicht
          personenbezogene Daten, indem wir beispielsweise einen Bericht über
          Trends bei der Nutzung der Website veröffentlichen.
        </Typography>

        <Typography variant='h6' component='h4' gutterBottom>
          Um auf rechtliche und andere Anfragen zu reagieren und um Schäden zu
          vermeiden
        </Typography>
        <Typography component='ol' sx={{ pl: 4 }}>
          <li>Das Gesetz einhalten.</li>
          <li>Unsere Nutzungsbedingungen durchzusetzen.</li>
          <li>
            Betrug, Sicherheitsfragen oder technische Probleme zu erkennen, zu
            verhindern oder anderweitig zu beheben.
          </li>
          <li>
            Uns, unsere Nutzer und die Öffentlichkeit zu schützen und Schäden
            vorzubeugen.
          </li>
        </Typography>

        <Typography variant='h5' component='h3' gutterBottom>
          Wie sichern wir Ihre Daten?
        </Typography>
        <Typography paragraph>
          Wir befolgen allgemein anerkannte Industriestandards zum Schutz vor
          unbefugtem Zugriff, Nutzung, Änderung oder Vernichtung
          personenbezogener Daten. Sollten wir eine Datenschutzverletzung durch
          Unbefugte vermuten oder Kenntnis davon haben, wo sich Ihre
          Benutzerdaten befinden oder wo sie für nicht autorisierte Zwecke
          verwendet werden könnten, werden wir Sie umgehend darüber informieren,
          sodass Sie geeignete Maßnahmen ergreifen können.
        </Typography>

        <Typography variant='h5' component='h3' gutterBottom>
          Wie informieren wir Sie über Änderungen in unserer Richtlinie?
        </Typography>
        <Typography paragraph>
          Wir behalten uns das Recht vor, diese Datenschutzerklärung jederzeit
          zu ändern. Sollten wir grundlegende Änderungen in der Verwendung Ihrer
          personenbezogenen Daten vornehmen, werden wir Sie im Voraus per E-Mail
          darüber benachrichtigen.
        </Typography>

        <Typography variant='h5' component='h3' gutterBottom>
          Uns kontaktieren
        </Typography>
        <Typography paragraph>
          Sollten Sie Fragen zu diesem Dokument, den Verfahrensweisen unserer
          Websites oder Apps haben, kontaktieren Sie uns bitte unter: Blyze
          Zürich | c/o SAE Institute | Buckhauserstrasse 24 | 8048 Zürich
          Schweiz | +41 78 1234567 |{' '}
          <Link href='mailto:info@blyze.ch'>info@blyze.ch</Link> |{' '}
          <Link href='https://blyze.ch'>https://blyze.ch</Link>
          <br />
          Dieses Dokument wurde zuletzt am 14. August 2024 aktualisiert
        </Typography>
      </Box>
    </PageLayout>
  )
}
