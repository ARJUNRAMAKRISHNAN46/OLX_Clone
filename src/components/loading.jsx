

export const JustLoading = ({ size = 24,additional }) => {
    return (
        <div
            className={`animate-spin rounded-full h-${size} w-${size} border-t-4 border-black ${additional}`}
        ></div>
    );
};