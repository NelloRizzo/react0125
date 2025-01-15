import PersonalData from "../model/personal-data"

interface FiscalCodeViewerProps {
    data: PersonalData
    fiscalCode: string
}
export default function FiscalCodeViewer({ data, fiscalCode }: FiscalCodeViewerProps) {
    return (
        <div className="fiscal-code-viewer">
            <div>Codice fiscale: {fiscalCode}</div>
        </div>
    )
}