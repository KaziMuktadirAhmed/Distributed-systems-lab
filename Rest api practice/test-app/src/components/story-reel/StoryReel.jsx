import "./StoryReel.css"

import Story from '../story/Story'
import AddStory from "../add-story/AddStory"

function StoryReel({ fullName }) {
  return (
    <div className='storyReel'>
      {/* <Testing /> */}
      <AddStory
        fullName={ fullName }
        profileSrc="https://i.ytimg.com/vi/Ii8h7DCIcMo/maxresdefault.jpg"
      />
      <Story 
        image="https://scontent.fdac14-1.fna.fbcdn.net/v/t1.6435-9/50258950_2270693829851752_3178120170900029440_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=19026a&_nc_ohc=tEOzbModfREAX-d7ir2&_nc_ht=scontent.fdac14-1.fna&oh=00_AT-D2ha8KN3_PNmmAVq3AEfiBgdjSxnB92ZhQ0ZqY2cJzw&oe=62F94134"
        profileSrc="https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/294037374_3437720583124793_4913469462906133452_n.jpg?stp=cp1_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=38x6Nim9x0oAX-GjOuv&_nc_ht=scontent.fdac14-1.fna&oh=00_AT-IUHXCs_N3g194aiIlZO4mjqWW2qFCDzxsQSG7H9asXA&oe=62D63CE0"
        title = "Fahad"
      />
      <Story 
        image="http://10.100.104.14:9000/ok-ish/1658729124354.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=QS904PP3JDD448M8G0PS%2F20220726%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220726T082919Z&X-Amz-Expires=604800&X-Amz-Security-Token=eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhY2Nlc3NLZXkiOiJRUzkwNFBQM0pERDQ0OE04RzBQUyIsImV4cCI6MTY1ODgyNTc1NCwicGFyZW50IjoibWluaW8ifQ.HoV36ZAo1R3Njdd__i-dQ2PefZyVwGTIxQRzSEgyi_urm9y3RU5z6LKqVuYCqwlj_dBU-rxpEOHNTOW4U4UkqQ&X-Amz-SignedHeaders=host&versionId=null&X-Amz-Signature=3f4e1025fce3b52d9fef52a01cbcb4d3a0aca5dff9e8917fa19a368d91041fdf"
        profileSrc="https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/294037374_3437720583124793_4913469462906133452_n.jpg?stp=cp1_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=38x6Nim9x0oAX-GjOuv&_nc_ht=scontent.fdac14-1.fna&oh=00_AT-IUHXCs_N3g194aiIlZO4mjqWW2qFCDzxsQSG7H9asXA&oe=62D63CE0"
        title = "Fahad"
      />
    </div>
  )
}

export default StoryReel