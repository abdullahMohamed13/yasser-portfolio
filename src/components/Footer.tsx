export default function Footer() {
  return (
    <footer className="mt-15 mb-5 flex flex-col items-center gap-2 text-center">
      <p className="text-lg font-semibold">Appreciate You Stopping By</p>
      <p className="text-sm text-muted-foreground">
        Always open to new opportunities & collaborations.
      </p>
      <p className="text-sm text-muted-foreground">
        Whether it's data, projects, or a quick chat — feel free to reach out.
      </p>
      <p className="text-xs text-muted-foreground mt-3">
        © {new Date().getFullYear()} Yasser Allam. All Rights Reserved.
      </p>
    </footer>
  )
}
