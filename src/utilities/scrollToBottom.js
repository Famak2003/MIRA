export default function scrollToBottom(ref) {
  ref.current.scrollIntoView({
    behavior: "smooth",
    block: "end",
    inline: "end",
  });
}
