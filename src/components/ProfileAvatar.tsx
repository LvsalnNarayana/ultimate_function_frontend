import multiavatar from "@multiavatar/multiavatar/esm"

const ProfileAvatar = (props: { username: string; size: number }) => {
  const htmlParser = new DOMParser()
  const parsedSVG = htmlParser.parseFromString(
    multiavatar(props.username),
    "image/svg+xml",
  )
  const safeSVG = parsedSVG.documentElement.outerHTML

  return (
    <div
      style={{ width: `${props.size}px`, height: `${props.size}px` }}
      className={`select-none shrink-0`}
      dangerouslySetInnerHTML={{ __html: safeSVG }}
    />
  )
}

export default ProfileAvatar
