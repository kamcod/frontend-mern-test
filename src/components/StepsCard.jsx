export default function StepsCard({ step, title, content, className = ""}){
    return (
        <div className={`${className} p-6 rounded-2xl border border-themeColor bg-white text-customBlack`}>
            <h2 className="text-lg font-medium mb-4">
                {`Step ${step} - ${title}`}
            </h2>
            <p>{content}</p>
        </div>
    )
}
